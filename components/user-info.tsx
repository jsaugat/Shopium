// // Reusable User Info component

// import { ExtendedUser } from "@/next-auth.d";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// interface UserInfoProps {
//   user?: ExtendedUser
//   label: string;
// }

// export const UserInfo = ({ user, label }: UserInfoProps) => {
//   return (
//     <Card className="md:w-[600px]">
//       <CardHeader>
//         <h1 className="text-2xl font-semibold text-center">
//           {label}
//         </h1>
//       </CardHeader>
//       <CardContent className="space-y-2">
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="font-medium">ID</p>
//           <p className="truncate text-sm max-w-[180px] font-mono bg-neutral-100 rounded p-1 px-2">{user?.id}</p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="font-medium">Username</p>
//           <p className="truncate text-sm max-w-[180px] font-mono bg-neutral-100 rounded p-1 px-2">{user?.name}</p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="font-medium">Email</p>
//           <p className="truncate text-sm max-w-[180px] font-mono bg-neutral-100 rounded p-1 px-2">{user?.email}</p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="font-medium">Role</p>
//           <p className="truncate text-sm max-w-[180px] font-mono bg-neutral-100 rounded p-1 px-2">{user?.role}</p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="font-medium">Two-Factor Authentication</p>
//           <p className={cn("truncate text-sm max-w-[180px] font-mono rounded p-1 px-2 text-white", user?.isTwoFactorEnabled ? "bg-emerald-500" : "bg-rose-500")}>
//             {user?.isTwoFactorEnabled ? "ON" : "OFF"}
//           </p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }