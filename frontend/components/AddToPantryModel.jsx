"use client";

import React,{useState} from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const AddToPantryModal = ({isOpen, onClose, onSuccess}) => {
    const [activeTab, setActiveTab] = useState("scan");
    const [selectedImages, setSelectedImages] = useState([]);
    const [scannedImages, setScannedImages] = useState([]);
    const [manualItems, setManualItems] = useState({name:"",quantity:""});
    const handleClose = () => {
        setActiveTab("scan");
        setSelectedImages([]);
        setScannedImages([]);
        setManualItems({name:"",quantity:""});
        onClose();
    }
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddToPantryModal;