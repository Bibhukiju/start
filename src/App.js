import React, {useContext} from 'react';
import './assets/layout.scss'
import VideoCreator from "./components/VideoCreator";
import UseAppData from "./hooks/UseAppData";
import {Context} from "./context";
import {setSelectedDataFunc} from "./context/chooseDataAction";

const App = () => {
    const {setSelectedData, selectedData} = UseAppData()
    const {dispatch} = useContext(Context)
    const handleChange = (value) => {
        dispatch(setSelectedDataFunc(dispatch,value))
    }
    return(
      <div>
        <VideoCreator />
      </div>
    )