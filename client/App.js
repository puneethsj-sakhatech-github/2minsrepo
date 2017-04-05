import React, { Component } from 'react';
import ToastsList from './components/toasts/ToastsList';
import NavigationBar from './components/NavigationBar';
import ModalContainer from './components/common/ModalContainer';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  // componentWillReceiveProps() {
  //   window.previousLocation = this.props.location;
  //   console.log("previous location is " + window.previousLocation.pathname);
  // }
  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
      <div className="wrapper">
        <NavigationBar pathname={this.props.location.pathname} />
        <ToastsList />
        <div className="home">
          {this.props.children}
        </div>
        <div >
          <Footer />
        </div>
      </div>
    );
  }
}
