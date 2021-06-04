import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { actions } from '../../store/actions'
import background from '../../resources/images/porsche-911.jpg'
import DecorTitle from '../../components/core/decor-title'
import InputText from '../../components/core/input-text'
import Checkbox from '../../components/core/checkbox'
import Icons from '../../components/core/icons'
import Button from '../../components/core/button'
import Storage from '../../common/local-storegare'
import Configs from '../../configs/env.config.json'
import { useToast } from '../../components/core/toast'

function LoginPage(props) {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation()
  const toast = useToast()

  const [isRemember, setRemember] = useState(true)
  const [formLogin, setFormLogin] = useState(
    {
      userName: '',
      password: ''
    }
  )
  const hanbleChecked = () => {
    setRemember(!isRemember)
  }
  const hanbleChanges = (event) => {
    let nam = event.target.name
    let val = event.target.value
    setFormLogin({
      ...formLogin,
      [nam]: val
    })
  }
  const login = (event) => {
    event.preventDefault()
    const payload = { ...formLogin }
    props.login(payload, (success, response) => {
      if (success) {
        Storage.set(Configs.STORAGE, response.result)
        toast.add(response.message)
      }
    })
  }

  return (
    <div className="">
      <div className="relative">
        <div
          id="banner"
          style={{ backgroundImage: `url(${background})` }}
          className="hidden md:block w-screen bg-fixed bg-cover h-48 h-80"
        />
        <div className="hidden md:block absolute left-0 top-0 bg-gradient-to-r from-gray-900 to-gray-500 w-screen h-48 opacity-80 h-80">
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
              <span className="inline-block pt-2 tracking-normal text-orange-300">You already have an account. SIGN IN NOW</span>
            </div>
            <form onSubmit={login}>
              <div className="pt-2 tracking-normal">
                <InputText
                  hanbleChanges={hanbleChanges}
                  value={formLogin.userName}
                  type="text"
                  name="userName"
                  labelName="Username or email address"
                />
              </div>
              <div className="pt-2 tracking-normal">
                <InputText
                  hanbleChanges={hanbleChanges}
                  name="password"
                  type="password"
                  labelName="Password"
                  value={formLogin.password}
                />
              </div>
              <div className="flex pt-2">
                <Checkbox
                  checked={isRemember}
                  hanbleChecked={hanbleChecked}
                  className="h-4 w-4 border-2 border-yellow-300 text-orange-300"
                  labelName="Remember me"
                  name="isRemember"
                />
                <div className="w-1/2 flex justify-end">
                  <Link to="/forgot">Forgot password</Link>
                  <Icons.RightArrow />
                </div>

              </div>
              <div className="flex justify-between pt-5">
                <div className="w-1/2">
                  <Button type="submit" className="w-3/4 text-gray-50 bg-orange-300 py-1 md:w-1/2" buttonName="Signin" />
                </div>
                <div className="w-1/2 flex justify-end">
                  <Link to="/register">Sign up</Link>
                  <Icons.RightArrow />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  stateLogin: state.login
})
const mapStateToDispatch = (dispatch) => ({
  login: (payload, callback) => dispatch(actions.login(payload, callback))
})

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage)
