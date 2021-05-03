import React, { useState, useEffect } from 'react'
import { getPrograma } from '../helpers/rutaProgramas'

const ProgramDetail = ({ curso }) => {
    const [programa, setPrograma] = useState({
        data: [],
        loading: true
    })
    const { data } = curso

    useEffect(() => {
        if (data.length !== 0) {
            getPrograma(data.id).then(prog => {
                setPrograma({
                    data: prog,
                    loading: false
                })
            })

        }


    }, [data])


    return (
        <>
            {programa.data.length !== 0 &&
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Temario</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-group">
                                {programa.data.programa.map(item => {
                                    return <li key={item} className="list-group-item">{item}</li>
                                })}


                            </ul>
                        </div>
                    </div>

                </div>

            }

        </>





    )
}

export default ProgramDetail
