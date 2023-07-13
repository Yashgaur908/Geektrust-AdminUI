import React, { Component } from 'react';

// ErrorBoundary component
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false // Initial state for error tracking
    };
  }

  // Static method to handle error and update state
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // Error handling method
  componentDidCatch(error, errorInfo) {
    // Custom error handling logic can be added here
    // For example, logging the error or sending an error report
  }

  render() {
    // Render fallback UI if there is an error
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Something went wrong!</h1>
          <h1 className="text-sm">We apologize for the inconvenience</h1>
        </div>
      );
    }

    // Render children components if there is no error
    return this.props.children;
  }
}
