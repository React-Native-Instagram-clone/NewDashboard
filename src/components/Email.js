import React, { useRef, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";

const EmailUtility = () => {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [attachment, setAttachment] = useState(null);
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSendEmail = async () => {
    const formData = new FormData();
    formData.append("to", to);
    formData.append("cc", cc);
    formData.append("bcc", bcc);
    formData.append("subject", subject);
    formData.append("html", html);
    formData.append("attachment", attachment);

    try {
      const response = await fetch(
        "https://dashboard-server-esamyak.vercel.app/email",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast("Email sent successfully!", "success");
      } else {
        toast("Failed to send email", "danger");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast("Internal Server Error. Please try again later", "danger");
    }
    console.log("Sending Email:", formData);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 pb-2">
        New Message
      </h2>
      <ToastContainer />
      <div className="mb-4 flex items-center">
        <label
          htmlFor="cc"
          className="font-semibold text-lg text-black absolute px-5 pt-0.5"
        >
          To:
        </label>
        <input
          type="text"
          id="to"
          className="mt-1 p-2 border rounded w-full text-lg text-gray-800 pl-14"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center">
        <label
          htmlFor="cc"
          className="font-semibold text-lg text-black absolute px-5 pt-0.5"
        >
          Cc:
        </label>
        <input
          type="text"
          id="cc"
          className="mt-1 p-2 border rounded w-full text-lg text-gray-800 pl-14"
          value={cc}
          onChange={(e) => setCc(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center">
        <label
          htmlFor="cc"
          className="font-semibold text-lg text-black absolute px-5 pt-0.5"
        >
          Bcc:
        </label>
        <input
          type="text"
          id="bcc"
          className="mt-1 p-2 border rounded w-full text-lg text-gray-800 pl-14"
          value={bcc}
          onChange={(e) => setBcc(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center">
        <label
          htmlFor="cc"
          className="font-semibold text-lg text-black absolute px-5 pt-0.5"
        >
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          className="mt-1 p-2 border rounded w-full text-lg text-gray-800 pl-24"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <Editor
        apiKey="mcmfzrzm2kpz6gs4rnyy2wp3neiamc4l9edser2idkd2yshj"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={html}
        value={html}
        //onSelectionChange={() => setHtml(editorRef.current.getContent())}
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="mb-4 flex items-center">
        <label
          htmlFor="attachment"
          className="block text-sm font-medium text-gray-600"
        >
          Attachment:
        </label>
        <label
          htmlFor="attachment"
          className="ml-2 text-gray-500 cursor-pointer"
        >
          <AttachFileIcon style={{ fontSize: "24px", color: "#4CAF50" }} />
        </label>
        <input
          type="file"
          id="attachment"
          className="hidden"
          onChange={handleAttachmentChange}
        />
        {attachment && (
          <span className="ml-2 text-gray-800">{attachment.name}</span>
        )}
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleSendEmail}
      >
        <span className="material-icons"></span> Send Email
      </button>
    </div>
  );
};

export default EmailUtility;
