import AuthLayout from './AuthLayout';
import HeroImage from './HeroImage';

function AppLayout() {
  return (
    <main className="container mx-auto flex flex-col-reverse items-center justify-between gap-[1.5rem] p-4 sm:flex-row sm:gap-8 sm:p-8">
      <AuthLayout />
      <HeroImage />
    </main>
  );
}

export default AppLayout;

// const handleNext = async () => {
//   try {
//     // Validate only step 2 fields
//     step2Schema.parse({
//       password: form.getValues('password'),
//       rePassword: form.getValues('rePassword'),
//     });

//     // If no error, move to next step
//     navigate('/register/step-3');
//   } catch (err: any) {
//     // Set errors in React Hook Form
//     if (err.errors) {
//       err.errors.forEach((error: any) => {
//         form.setError(error.path[0], {
//           type: 'manual',
//           message: error.message,
//         });
//       });
//     }
//   }
// };
