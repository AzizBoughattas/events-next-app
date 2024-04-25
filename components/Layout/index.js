import { useContext } from "react";
import MainHeader from "../MainHeader";
import NotificationContext from "../../store/notification-context";
import Notification from "../UI/Notification";

function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          status={activeNotification.status}
          message={activeNotification.message}
        />
      )}
    </>
  );
}

export default Layout;
