import React from "react";
import { Spinner, Button } from "react-bootstrap";

const MediumButtonComponent = ({ text, type, isLoading = false }) => {
  return (
    <Button className="orange-button-medium" disabled={isLoading} type={type}>
      {isLoading && <Spinner className="mr-1 spinner" />} {text}
    </Button>
  );
};

export default MediumButtonComponent;
