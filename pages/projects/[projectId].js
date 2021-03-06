import { useRouter } from "next/router";
import { useRef, useState, useEffect, useContext } from "react";
import Toast from "../../components/Toast";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";
import { apiUrl, ProjectContext, websiteUrl } from "../_app";
import HeadTags from "../../components/headTags";
import Spinner from "../../components/Spinner";
import AppNavbar from "../../components/appNavbar";
import Create from "../../components/projects/create";
import deleteProject from "../../services/projects/deleteProject";

const GetProject = () => {
  const router = useRouter();

  const projectContext = useContext(ProjectContext);

  const [project, setProject] = useState(false);

  const [toast, setToast] = useState("");

  const getProject = useRef(() => {});

  useEffect(() => {
    if (router && router.query) {
      const { projectId } = router.query;
      getProject.current(projectId);
    }
  }, [router, router.query]);

  getProject.current = async (projectId) => {
    setToast(() => {
      return (
        <Toast
          heading={"Just a sec"}
          body={"Please wait while we fetch your project."}
          loading
          onClose={setToast("")}
        />
      );
    });
    try {
      if (projectId) {
        const res = await fetch(`${apiUrl}/projects/${projectId}`, {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 200) {
          const resData = await res.json();
          if (resData.success === true) {
            // console.log(resData);
            projectContext.setProjectId(resData.data.id);
            setProject(() => resData.data);
            setToast("");
          }
        } else if (res.status == 401) {
          router.push(`/auth/sign-in?redirect=/projects/${projectId}`);
        } else {
          setToast(() => {
            return (
              <Toast
                variant={"danger"}
                heading={"Oops!"}
                body={
                  "We couldn't fetch your project. Please refresh the page and we'll try again."
                }
                onClose={() => {
                  setToast(() => {
                    return "";
                  });
                }}
              />
            );
          });
        }
      }
    } catch (err) {
      setToast(() => {
        return (
          <Toast
            variant={"danger"}
            heading={"Oops!"}
            body={
              "We couldn't fetch your project. Please refresh the page and we'll try again."
            }
            onClose={() => {
              setToast(() => {
                return "";
              });
            }}
          />
        );
      });
    }
  };

  return (
    <>
      <AppNavbar />
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <HeadTags
        title={"My Project"}
        description={"Manage your automatic post generator."}
        robots={"nofollow"}
      />
      <Container fluid className="p-4">
        {project ? (
          <div>
            <Button
              variant="danger"
              className="float-end"
              onClick={() => {
                deleteProject({ projectId: project.id, router: router });
              }}
            >
              Delete
            </Button>
            <Button
              variant="outline-primary me-2"
              className="float-end"
              onClick={() => {
                router.push(`${websiteUrl}/projects/${project.id}/edit`);
              }}
            >
              Edit
            </Button>
            <h1>{project.name}</h1>
            <Create project={project} />
            {/* <p>{JSON.stringify(project)}</p> */}
          </div>
        ) : (
          <Spinner style={{ marginTop: "40vh" }} />
        )}
      </Container>
    </>
  );
};

export default GetProject;
