import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import login from './screen/commons/login';
import firstPage from './screen/commons/firstPage';
import loginInfo from './screen/commons/loginInfo';
import home from './screen/home';
import afterLogin from './screen/commons/afterLogin';
import studentMain from './screen/student/studentMain';
import teacherMain from './screen/teacher/teacherMain';
import studentReportMain from './screen/student/studentReportMain';
import studentReportCumulative from './screen/student/studentReportCumulative';
const App = () => {
  // console.log(M.data.storage());
  return (
    <Router>
      <Route exact path="/" component={firstPage} />
      <Route path="/login" component={login} />
      <Route path="/loginInfo" component={loginInfo} />
      <Route path="/afterLogin" component={afterLogin} />
      <Route path="/studentMain" component={studentMain} />
      <Route path="/studentReportMain" component={studentReportMain} />
      <Route path="/studentReportCumulative" component={studentReportCumulative} />
      <Route path="/teacherMain" component={teacherMain} />
    </Router>
  );
};

export default App;
