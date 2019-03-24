import React from "react";
import { shallow, render, mount } from "enzyme";
import ProductContainer, { Product } from "./Product";

const mockDispatch = jest.fn();

const store = {
  dispatch: mockDispatch,
  product: {
    data: []
  },
  selection: {
    selectionItems: [4, 8, 10, 20, 40]
  }
};
const props = {
  dispatch: mockDispatch,
  product: {
    data: []
  },
  selection: {
    selectionItems: [4, 8, 10, 20, 40]
  }
};

const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};

function setupProuctContainer(ownProps = props) {
  return shallow(<ProductContainer {...ownProps} />, {
    attachTo: document.getElementById("react")
  });
}

function setupProuct() {
  return shallow(<Product {...props} />, {
    attachTo: document.getElementById("react")
  });
}

function renderProuct() {
  return render(<Product {...props} />, {
    attachTo: document.getElementById("react")
  });
}
function mountProuct() {
  return mount(<Product {...props} />, {
    attachTo: document.getElementById("react")
  });
}

function setupProductWithStore() {
  return shallowWithStore(<Product {...props} />, store);
}

describe("ProductContainer", () => {
  const wrapper = setupProuctContainer();
  wrapper.setProps({ dispatch: mockDispatch });
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Product", () => {
  const wrapper = setupProuct();
  wrapper.setProps({ dispatch: mockDispatch });
  it("should render properly", () => {
    expect(mockDispatch).toHaveBeenCalled();
  });
});
