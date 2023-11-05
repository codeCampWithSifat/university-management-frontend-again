"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuaidianInfo from "@/components/StudentForms/LocalGuaidianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuaidianInfo />,
    },
  ];
  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
      />
    </div>
  );
};

export default CreateStudentPage;
