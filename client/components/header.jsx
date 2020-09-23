import React from 'react';

function Header(props) {
  return (
    <header className="row mb-3 mt-2 w-100 align-items-center">
      <h1 className="col-lg-8">
        { props.text }
      </h1>
      <h4 className="col-lg">
        Average Grade<span className="badge badge-secondary ml-2">
          {String(props.average)}
        </span>
      </h4>
    </header>
  );
}

export default Header;
