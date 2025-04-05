import {getYear} from 'date-fns';

export function information(matricule) {
    const regex = /^([a-zA-Z]{2})-([a-zA-Z]{3})-([0-9]{2})([a-zA-Z]{2})([0-9]{4})$/;
    const match = matricule.match(regex);

    if (!match) {
        return 'Matricule invalide';
    }

    const [_, country, university, year, faculty, id] = match;

    const currentYear = getYear(new Date()) % 100;
    const studentYear = parseInt(year, 10);
    const level = currentYear - studentYear;

    return {
        niveau: level,
    };
};
