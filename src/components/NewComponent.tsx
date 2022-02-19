import React from 'react';


type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentProps = {
    students: StudentsType[]
}

export const NewComponent = (props: NewComponentProps) => {

    type topCarsProps = {}

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <div>
            <ul>
                {props.students.map((s, index) => <li key={s.id}>Привет {s.name}! Тебе точно {s.age}?</li>)}
            </ul>

            {topCars.map((c, index) => <table>
                <tr>
                    <th>{c.manufacturer}</th>

                </tr>
                <tr>
                    <td>{c.model}</td>
                </tr>

            </table>)}


        </div>

    );
}