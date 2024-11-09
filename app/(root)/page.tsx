"use client";

import { Button } from "@/components/ui/button";
import { open, close } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const modal = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  console.log({ modal });
  return (
    <div className="font-sans">
      Hello page
      <div>{JSON.stringify(modal)}</div>
      <Button onClick={() => dispatch(open())}>Create Store</Button>
      <Button onClick={() => dispatch(close())}>Close Store</Button>
    </div>
  );
}
