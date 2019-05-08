import thunk from "redux-thunk";
import moxios from "moxios";
import { googlelogin, facebooklogin } from "../../actions/SocialAuthActions";
import data from "../../tests/mock_data/moxios_mock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("googlelogin Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("logs in user using google", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.data
      });
    });

    const expectedGoogleAction = [
      {
        payload: {
          email: "cartpix@gmail.com",
          token: "token",
          username: "Kisekka David"
        },
        type: "GOOGLE_LOGIN"
      }
    ];

    const googleToken = {
      user_token: {
        auth_token: "googleToken"
      }
    };

    return store.dispatch(googlelogin(googleToken)).then(() => {
      expect(store.getActions()).toEqual(expectedGoogleAction);
    });
  });
});

describe("facebooklogin Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("logs in user using facebook", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.data
      });
    });

    const expectedFacebookAction = [
      {
        payload: {
          email: "cartpix@gmail.com",
          token: "token",
          username: "Kisekka David"
        },
        type: "FACEBOOK_LOGIN"
      }
    ];

    const facebooktoken = {
      user_token: {
        auth_token: "facebooktoken"
      }
    };

    return store.dispatch(facebooklogin(facebooktoken)).then(() => {
      expect(store.getActions()).toEqual(expectedFacebookAction);
    });
  });
});

describe("facebookSocialfailure Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("fails to log in using facebook", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.errors
      });
    });

    const expectedFacebookAction = [
      {
        payload: {
          errors: "Invalid token"
        },
        type: "FACEBOOK_FAILURE"
      }
    ];

    const facebooktoken = {
      user_token: {
        auth_token: "facebooktoken"
      }
    };

    return store.dispatch(facebooklogin(facebooktoken)).then(() => {
      expect(store.getActions()).toEqual(expectedFacebookAction);
    });
  });
});

describe("GoogleSocialfailure Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("fails to log in using Google", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.errors
      });
    });

    const expectedGoogleAction = [
      {
        payload: {
          errors: "Invalid token"
        },
        type: "GOOGLE_FAILURE"
      }
    ];

    const googletoken = {
      user_token: {
        auth_token: "googleToken"
      }
    };

    return store.dispatch(googlelogin(googletoken)).then(() => {
      expect(store.getActions()).toEqual(expectedGoogleAction);
    });
  });
});

describe("GoogleSocialAlreadyRegisteredUser Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("fails to log in using Google", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.data2
      });
    });

    const expectedGoogleAction = [];

    const googletoken = {
      user_token: {
        auth_token: "googleToken"
      }
    };

    return store.dispatch(googlelogin(googletoken)).then(() => {
      expect(store.getActions()).toEqual(expectedGoogleAction);
    });
  });
});

describe("facebookSocialAlreadyRegisteredUser Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("logs in user using facebook", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: data.data2
      });
    });

    const expectedFacebookAction = [];

    const facebooktoken = {
      user_token: {
        auth_token: "facebooktoken"
      }
    };

    return store.dispatch(facebooklogin(facebooktoken)).then(() => {
      expect(store.getActions()).toEqual(expectedFacebookAction);
    });
  });
});
