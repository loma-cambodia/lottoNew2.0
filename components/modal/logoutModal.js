import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "reactstrap";
const LogoutModal = ({_logoutStatus,_memberId}) => {
    const logoutData = _logoutStatus
    const MemberId = _memberId
    const closeTab = (member_id) => {
        fetch(`/api/logout?member_id=${member_id}`)
        .then((res) => { let response = res.json(); 
            window.close();
      })
    //   window.close();
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
          borderRadius: '12px',
          padding: 0
        },
      };
    return (
        <>
        <Modal
            isOpen={logoutData}
            style={customStyles}
            contentLabel="Example Modal"
          >
                <div className="modal-header text-white px-2 py-3 modal-dialog-centered" style={{ backgroundColor: '#bf2262' }}>
                  <h5 className="modal-title" id="bettingModal" style={{ paddingLeft: '10px' }}>
                  <i class="fa fa-exclamation-triangle"></i> Warning
                  </h5>
                </div>
                <div className="modal-body p-3" >
                  <div className="container-fluid table-wrapper-scroll-y my-custom-scrollbar">
                    <h4>Your login session has been expire, Please login again to continue.</h4>
                  </div>
                </div>
                <div className="modal-footer px-2 py-3 border-top" style={{ justifyContent: 'center' }}>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>closeTab(MemberId)}><i class="fa fa-check" aria-hidden="true"></i> Okay</button>
                </div>
        </Modal>
        </>
    )
}
export default LogoutModal;