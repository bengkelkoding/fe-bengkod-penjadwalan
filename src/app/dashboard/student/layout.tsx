"use-client";

import AuthGuard from "@/utils/guard/auth-guard";
import StudentGuard from "@/utils/guard/student-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <StudentGuard>{children}</StudentGuard>
    </AuthGuard>
  );
};

export default Layout;
