import React from 'react';
import ReactDOM from 'react-dom';
import Contact from "./contact";
import Main from "./main";
import Services from "./services";
import Codesamples from "./codesamples";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./stlye.scss";
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// 
const topNavItems = [
  {"key":'/main', "label":"DI"},
  {"key":'/profile', "label":"Profile"},
  {"key":'/codesamples', "label":"Code"},
  {"key":'/contact', "label":"Contact"}
];
const bottomNavItems = [
  {"key":"https://github.com/dhindurthy", "label":"GitHub"},
  {"key":"https://codesandbox.io/u/dhindurthy", "label":"CodeSandbox"},
  {"key":"https://codepen.io/dhindurthy/", "label":"CodePen"}
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "" };
    this._handleClick = this._handleClick.bind(this);
    this._onArrowHit = this._onArrowHit.bind(this);
  }
  _handleClick(menuItem) { 
    this.setState({ active: menuItem });
  }
  _onArrowHit (event) {
    if (event.keyCode === 39 && event.currentTarget.nextSibling) {
      event.currentTarget.nextSibling.firstChild.focus();
    }
    if (event.keyCode === 37 && event.currentTarget.previousSibling) {
      event.currentTarget.previousSibling.firstChild.focus();
    }
  }
  _setColor(){
    const bodyelemet = document.getElementsByTagName("BODY")[0];
    bodyelemet.classList.remove("bnw");
    bodyelemet.classList.add("color");
  }
  _setBnw(){
    const bodyelemet = document.getElementsByTagName("BODY")[0];
    bodyelemet.classList.remove("color");
    bodyelemet.classList.add("bnw");
  }
  render (){

    return (
      <Router>
        <section className="App">
          <section className="container">
            <header>
              <nav>
                <ul role="menubar" className="navigation nav-list">
                  {topNavItems.map(menuItem => 
                  <li role="presentation" key={menuItem.label} onKeyDown={this._onArrowHit.bind(this)}>
                    <Link
                      id={menuItem.label}
                      tabIndex="0"
                      role="menuitem"
                      to={menuItem.key}
                      className={this.state.active === menuItem.label ? 'activeStyle' : ''} 
                      onClick={this._handleClick.bind(this, menuItem.label)}>
                      {menuItem.label}
                    </Link>
                  </li>
                  )}
                </ul>
              </nav>
            </header>
            <aside>
              <h3 className="email">dhirajindurthy@gmail.com</h3>
            </aside>
            <main>
              <Route path="/main" component={Main} />
              <Route path="/profile" component={Services} />
              <Route path="/codesamples" component={Codesamples} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact={true} component={Main} />
            </main>
            <footer>
              <nav className="footer-nav">
                <ul role="menubar" className="navigation footer-list">
                  <li role="presentation" onKeyDown={this._onArrowHit.bind(this)}>
                    <a
                      tabIndex="0"
                      role="menuitem"
                      href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  {bottomNavItems.map(menuItem => 
                  <li role="presentation" key={menuItem.label} onKeyDown={this._onArrowHit.bind(this)}>
                    <a
                      tabIndex="0"
                      role="menuitem"
                      href={menuItem.key}
                      rel="noopener noreferrer"
                      target="_blank">
                      {menuItem.label}
                    </a>
                  </li>
                  )}
                </ul>
              </nav>

              <section className="info-help">
                <section className="theme-buttons" aria-describedby="This can be used for changing themes">
                  <button aria-label="colour theme" className="theme-colour" onClick={() => this._setColor()}>
                  </button>
                  <button aria-label="grayscale theme" className="theme-gray" onClick={() => this._setBnw()}>
                  </button>
                </section>
                <h4 className="power">Designed and Built by Dhiraj Indurthy | Powered by a11y and ReactJS</h4>
              </section>
            </footer>
          </section>
        </section>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
const bodyelemet = document.getElementsByTagName("BODY")[0];
bodyelemet.classList.add("color");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
