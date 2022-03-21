import React from 'react'

export default class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props: any) {
      super(props)
      this.state = { hasError: false }
    }
  
    static getDerivedStateFromError(error: any) {
      return { hasError: true }
    }
  
    componentDidCatch(error: any, info: any) {
      console.log(error, info)
    }
  
    render() {
        if (this.state.hasError) return <h1>Something went wrong, please refresh the page.</h1>
        return this.props.children
    }
}