import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex max-w-3xl mx-auto p-3 flex-col md:flex-row md:items-center gap-5' >
        {/*h*/}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-blue-500 rounded-lg text-white'>Sanoj's Blog</span>
          </Link>
          <p className="text-sm mt-5">
            This ia a project for a blog website. You can sign up with your email and password or with google.
          </p>
        </div>
        {/*right */}
        <div className='flex-1'>
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username"/>
              <TextInput type="text" placeholder="Username" id="username"/>
            </div>
            <div>
              <Label value="Your email"/>
              <TextInput type="text" placeholder="Email" id="email"/>
            </div>
            <div>
              <Label value="Your password"/>
              <TextInput type="text" placeholder="Password" id="password"/>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-md mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
