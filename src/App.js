import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import ItemList from "./pages/item-list";
import ItemDetails from "./pages/item-details";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="page-container">
          <div className="head">Lorem Ipsum</div>
          <div className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat aliquet convallis. Suspendisse semper eros vulputate erat
            venenatis posuere. Praesent maximus gravida mi, nec scelerisque
            dolor mattis eu. Nullam sed elit at tortor congue porttitor.
            Curabitur sed convallis purus, et porta enim. Curabitur fermentum
            rhoncus felis, sit amet ullamcorper justo eleifend hendrerit.
            Aliquam auctor est orci, nec imperdiet lectus viverra quis. In
            malesuada et erat non malesuada. Quisque vitae turpis elit. Sed
            commodo a metus ac sodales. Sed dolor nisl, commodo id venenatis id,
            placerat vel mauris. Aenean molestie mattis leo eget dictum.
            Praesent non auctor quam. Aliquam posuere accumsan semper. Curabitur
            bibendum purus sit amet pharetra posuere. Fusce rhoncus turpis quis
            lectus consequat rutrum. Maecenas mollis mattis erat, a efficitur
            massa ultrices eu. Etiam sit amet malesuada dolor, a ultricies
            felis. Praesent eu sem lacinia, iaculis magna vitae, dignissim nisi.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Proin lacinia ligula et orci pharetra,
            tempus venenatis libero posuere. Pellentesque eu euismod dui.
            Vestibulum iaculis dolor molestie tempus porttitor. Sed viverra
            libero sit amet sapien vehicula pellentesque. Sed a semper risus.
            Integer nec massa egestas risus mattis viverra. Pellentesque feugiat
            sit amet nunc commodo maximus. Aenean hendrerit lorem ac ex
            tincidunt venenatis. Phasellus euismod ligula non urna porttitor, ut
            laoreet massa dignissim. Nunc ultricies tortor lectus, facilisis
            interdum nisl maximus sit amet. Integer sit amet elit nec mi
            molestie imperdiet. Sed id risus tristique, condimentum nulla id,
            blandit urna. Sed pulvinar et nibh quis feugiat. Etiam imperdiet
            sagittis malesuada. Duis sed blandit enim. Nulla non tincidunt dui,
            non vestibulum sem. Praesent iaculis metus purus, at imperdiet lorem
            aliquam eget. Fusce vel nulla ut diam sodales hendrerit.
            Pellentesque semper leo sed arcu tincidunt feugiat. Duis malesuada
            ipsum id tortor tempus egestas. Quisque tellus est, dignissim a
            suscipit et, condimentum in metus. Fusce vulputate quam id ipsum
            ultricies, sed imperdiet ligula molestie. Praesent vestibulum
            iaculis interdum. Fusce at pharetra massa. Pellentesque auctor,
            augue ut tempor varius, sapien leo pellentesque lorem, vitae laoreet
            diam ex nec nisi. Curabitur porttitor facilisis nulla, ut interdum
            augue pretium quis. Sed aliquam lectus vitae urna ornare faucibus.
            Aenean congue nisi quis nulla viverra, hendrerit pretium neque
            vehicula. Vestibulum purus sapien, suscipit sit amet massa eget,
            tempor lobortis diam. Mauris egestas ligula lacus, fringilla
            sagittis enim luctus vitae.{" "}
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/items" component={ItemList} />
        <Route path="/details" component={ItemDetails} />
      </Switch>
    </Router>
  );
}
export default App;
