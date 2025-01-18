import Button from "@common/components/Button";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col h-screen gap-4 items-center justify-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <h2 className="text-4xl">Page not found</h2>
      <Button size="large" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
