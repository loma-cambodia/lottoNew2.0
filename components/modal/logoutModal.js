import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Modal } from "reactstrap";
const LogoutModal = ({_logoutStatus,_setData,_setIdleData,_memberId}) => {
  const dispatch = useDispatch();
  //const setData = _setData

    const logoutData = _logoutStatus
    const MemberId = _memberId
    const closeTab = (member_id) => {
      fetch(`/api/logout?member_id=${member_id}`)
      .then((res) => {
        let response = res.json();
        _setData({user:{data:{}}})
        _setIdleData(false);
        dispatch({
          type: "AUTH_LOGOUT"
        });
      })
      };
    const customStyles = {
        content: {
          top: '45%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: 'fit-content',
          borderRadius: '15px',
          padding: 0
        },
      };
    return (
        <>
        <Modal
        animation={false}
            isOpen={logoutData}
            style={customStyles}
          >
                <div className="modal-header text-white px-2 py-3 modal-dialog-centered" style={{ backgroundColor: '#bf2262' }}>
                  <h5  className="modal-title" id="bettingModal" style={{ paddingLeft: '10px',fontWeight:'bold', }}>
                  <i class="fa fa-exclamation-triangle" style={{color:'#ffc107'}}></i> Warning
                  </h5>
                </div>
                <div className="modal-body p-3" >
                  <div className="container-fluid table-wrapper-scroll-y my-custom-scrollbar text-center">
                    <h4><i class="fa fa-clock" aria-hidden="true" style={{color:'#ffc107'}}></i> Your login session has expired. &nbsp;
                    Please login again to continue.</h4> 
                  </div>
                </div>
                <div className="modal-footer px-2 py-3 border-top" style={{ justifyContent: 'center' }}>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>closeTab()}><i class="fa fa-check" aria-hidden="true"></i> Okay</button>
                </div>
        </Modal>
        </>
    )
}
export default LogoutModal;