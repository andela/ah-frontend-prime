import React from "react";

const FollowingList = props => {
  const { following } = props;
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">My Following</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {following && following.length > 0
            ? following.map(item => (
                <div
                  className="row"
                  id="following"
                  key={item.username}
                  onClick={() => {
                    document.location.href = `/profile/${item.username}`;
                  }}
                  key={item.username}
                >
                  <button className="col col-lg-3" style={{ border: "none" }}>
                    <img
                      src={
                        item.image
                          ? `${item.image}`
                          : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                      }
                      alt="profile"
                      className="profile-page"
                    />
                  </button>
                  <div className="col col-lg-9">
                    <h5>{item.username}</h5>
                    <p>{item.full_name}</p>
                  </div>
                  <br />
                </div>
              ))
            : "No one is on the following List"}
        </div>
        <div class="modal-footer" />
      </div>
    </div>
  );
};

export default FollowingList;
