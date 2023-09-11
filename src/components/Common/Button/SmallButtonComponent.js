import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const SmallButtonComponent = ({ text, type, isLoading = false }) => {
  return (
    <Button className="orange-button-small" disabled={isLoading} type={type}>
      {isLoading && <Spinner className="mr-1 spinner" />} {text}
    </Button>
  );
};

export default SmallButtonComponent;
