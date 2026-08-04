import React from "react";
import { Pencil, Eye, XCircle } from "lucide-react";
import IconButton from "../common/IconButton";

export default function ActionButtons({ onEdit, onView, onDeactivate }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <IconButton icon={Pencil} label="Edit" onClick={onEdit} />
      <IconButton icon={Eye} label="View" onClick={onView} />
      <IconButton
        icon={XCircle}
        label="Deactivate"
        onClick={onDeactivate}
        color="#DC2626"
      />
    </div>
  );
}
