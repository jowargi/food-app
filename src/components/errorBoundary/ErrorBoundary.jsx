import { Component } from "react";
import ErrorFallback from "../errorFallback/ErrorFallback";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const { name, message } = this.state.error;

      return <ErrorFallback name={name} message={message} />;
    }

    return this.props.children;
  }
}
