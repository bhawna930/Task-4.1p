import React from 'react';
import { faker } from "@faker-js/faker";

const CustomList = [
    {
        "key": 0,
        "avatar": faker.image.urlLoremFlickr({category: 'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
    },
    {
        "key": 1,
        "avatar": faker.image.urlLoremFlickr({category: 'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
    },
    {
        "key": 2,
        "avatar": faker.image.urlLoremFlickr({category: 'people'}),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
    },
];

export default CustomList;
