import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import background from '../../resources/images/porsche-911.jpg'
import DecorTitle from '../../components/core/decor-title'
import InputText from '../../components/core/input-text'
import Checkbox from '../../components/core/checkbox'
import Icons from '../../components/icons'
import Button from '../../components/core/button'

export default function LoginPage() {
  const [checked, setChecked] = useState(true)
  const hanbleChecked = () => {
    setChecked(!checked)
  }
  return (
    <div className="">
      <div className="relative">
        <div
          id="banner"
          style={{ backgroundImage: `url(${background})` }}
          className="w-screen bg-fixed bg-cover h-48 md:h-80"
        />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-gray-900 to-gray-500 w-screen h-48 opacity-80 md:h-80">
          {/* <div className="container mx-auto pt-72 text-gray-50">
            <span id="breacrumb" className="">Trang chủ/Đăng nhập</span>
          </div> */}
        </div>
      </div>
      <div className="container mx-auto h-wrapper px-2">
        <div className="max-w-xl mx-auto flex h-5/6 sm:h-3/6 md:h-4/6 content-center">
          <div id="login-section" className="block h-80 w-full m-auto">
            <div className="block w-full">
              <h1 className="font-normal capitalize tracking-normal text-2xl pt-5">Welcom back!</h1>
              <DecorTitle />
            </div>
            <div className="pt-5 tracking-normal">
              <InputText className="rounded-md" labelName="Username or email address" />
            </div>
            <div className="pt-2 tracking-normal">
              <InputText className="rounded-md" labelName="Password" />
            </div>
            <div className="flex pt-5">
              <Checkbox
                checked={checked}
                hanbleChecked={hanbleChecked}
                className="h-4 w-4 border-2 border-yellow-300 text-orange-300"
                labelName="Remember me"
              />
              <Link className="w-1/2 flex justify-end" to="/forgot">Forgot password</Link>
              <Icons.RightArrow />
            </div>
            <div className="flex justify-between pt-5">
              <div className="w-1/2">
                <Button className="w-3/4 text-gray-50 bg-orange-300 py-1 md:w-1/2" buttonName="Signin" />
              </div>
              <Link className="w-1/2 flex justify-end" to="/register">Sign up</Link>
              <Icons.RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
