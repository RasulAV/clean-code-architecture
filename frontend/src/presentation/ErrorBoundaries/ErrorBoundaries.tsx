import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundariesProps {
  children: ReactNode;
}

interface ErrorBoundariesState {
  hasError: boolean;
  error: string;
}

export class ErrorBoundaries extends Component<ErrorBoundariesProps, ErrorBoundariesState> {
  public state: ErrorBoundariesState = {
    hasError: false,
    error: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundariesState {
    return {
      hasError: true,
      error: error.message,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error details:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`text-secondary d-flex flex-column align-items-center justify-content-center h-screen`}>
          <h1>Something went wrong.</h1>
          <p className="text-[#be2b2b9f]">{this.state.error}</p>
          <p className="text-secondary">Try refreshing the page, or try again later</p>
        </div>
      );
    }

    return this.props.children;
  }
}
