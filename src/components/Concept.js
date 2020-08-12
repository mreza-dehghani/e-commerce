import React,  {useEffect, useState} from 'react'

export default function Concept() {
    const [concept, setConcept] = useState([])

    useEffect(() => {
        const myArray = [
            {
                id: 0,
                name: 'ضمانت بازگشت کالا',
                info: 'اگر کالا برای شما مناسب نبود میتوانید تا هفت روز با یک تماس آن را مرجوع کنید'
            },
            {
                id: 1,
                name: 'تحویل سریع و آسان',
                info: 'سفارش های بیش از پنج میلیون تومان را در تهران و شهرستانها رایگان دریافت کنید'
            },
            {
                id: 2,
                name: 'کالای اورجینال',
                info: 'دیجی شاپ نمایندگی اصلی برند هاست، با اطمینان از اوریجینال بودن کالاها خرید کنید'
            }
        ]
        setConcept(myArray)
    }, [])

    const concept_ = concept.map(c => {
        return(
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={c.id}>
                <div className="card">
                    <div className="card-header">
                        <h3>
                            {c.name}
                        </h3>
                    </div>
                    <div className="card-body">
                        <p>
                            {c.info}
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container mb-4" id="concept">
            <div className="row">
                {concept_}
            </div>
        </div>
    )
}
