import React from 'react'
import propTypes from 'prop-types'
export const Student = (props) => {
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>isMarried</th>
                    <td>{props.isMarried?"yes":"no"}</td>
                </tr>
            </tbody>     
        </table>
    </div>
  )
}

Student.
propTypes = {
    name: propTypes.string,
    age:propTypes.number,
    isMarried:propTypes.bool
}

Student.defaultProps = {
    name:"NoName",
    age:0,
    isMarried:false
}