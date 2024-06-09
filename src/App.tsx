import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import Alert from "./components/ui/Alert/Alert";

const App = () => {
  return (
    <div className="alert-list">
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title="Upgrade your plan"
      >
        <p>
          Then go to your Vite based project and run popm link -global vite (or
          the package manager that you used to link vite globally). Now restart
          the <a href="/">development server</a> to ride on the bleeding edge!
        </p>
      </Alert>

      <Alert
        type="alert-info"
        icon={<Info size={20} />}
        title="Note"
        description="Vite aims to provide SSR Guide support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the Features Guide. check out the Backend Integration guide instead."
      />

      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup."
      />

      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title="Your order has been processed"
      >
        <p>
          We are pleased to inform you that your order has been successfully
          processed. You will receive a confirmation email with your order
          details shortly. If you have any questions or need further assistance,
          please do not hesitate to contact our <a href="/">support team</a>.
          Thank you for shopping with us!
        </p>
      </Alert>

      <Alert
        type="alert-warning"
        icon={<AlertTriangle size={20} />}
        title="Tips & Tricks"
        description="Explore our Tips & Tricks section to discover a wealth of practical advice and insider knowledge. Whether you're looking for ways to enhance your productivity, optimize your workflow, or learn new skills, you'll find valuable insights and expert guidance here. Stay ahead of the curve with our curated collection of tips and tricks!"
      />
    </div>
  );
};

export default App;
