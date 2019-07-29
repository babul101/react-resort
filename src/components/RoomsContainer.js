import React from 'react';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
import {RoomConsumer} from '../Context';
import Loading from './Loading';

const RoomsContainer = () => {
    return (
        <RoomConsumer>
        {
            (value) => {
               
                const {loading,sortedRooms,rooms} = value;
                if(loading){
                    return <Loading />
                }
                return (
                <div>
                   
                    <RoomsFilter rooms={rooms} />
                    <RoomsList rooms={sortedRooms} />
                </div>
                )
            }
        }
       
        </RoomConsumer>
       
    )
}

export default RoomsContainer
