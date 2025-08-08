// src/components/user-table-columns.tsx
"use client"; // Required for event handlers in Shadcn components

import { createColumnHelper } from "@tanstack/react-table";
import { type User } from "@/lib/schemas"; // Adjust path as needed
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor(row => `${row.address.city}, ${row.address.street}`, {
    id: "address",
    header: "Address",
  }),
  // Add a non-data "Actions" column
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(`Viewing ${user.name}`)}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Editing user ID ${user.id}`)}>
              Edit User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
];