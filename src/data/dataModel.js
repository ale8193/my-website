export const professionals = {
    skills: [
        {
            _id: 1,
            code: 'coding',
            label: 'Coding',
            percentage: 95,
            sub_skills: [
                {
                    _id: 1,
                    code: 'java',
                    label: 'Java',
                    percentage: 90
                },
                {
                    _id: 2,
                    code: 'python',
                    label: 'Python',
                    percentage: 85
                },
                {
                    _id: 3,
                    code: 'javascript',
                    label: 'JavaScript',
                    percentage: 95
                },
                {
                    _id: 4,
                    code: 'php',
                    label: 'PHP',
                    percentage: 90
                },
                {
                    _id: 5,
                    code: 'cpp',
                    label: 'C++',
                    percentage: 80
                },
                {
                    _id: 6,
                    code: 'scala',
                    label: 'Scala',
                    percentage: 80
                }
            ]
        },
        {
            _id: 2,
            code: 'web',
            label: 'Web',
            percentage: 90,
            sub_skills: [
                {
                    _id: 1,
                    code: 'html',
                    label: 'HTML',
                    percentage: 95
                },
                {
                    _id: 2,
                    code: 'css',
                    label: 'CSS',
                    percentage: 90
                },
                {
                    _id: 3,
                    code: 'scss',
                    label: 'SCSS',
                    percentage: 85
                },
                
            ]
        },
        {
            _id: 3,
            code: 'ai',
            label: 'AI',
            percentage: 75,
            sub_skills: [
                {
                    _id: 1,
                    code: 'test1',
                    label: 'test1',
                    percentage: 95
                },
                {
                    _id: 2,
                    code: 'test2',
                    label: 'test2',
                    percentage: 90
                },
                {
                    _id: 3,
                    code: 'test3',
                    label: 'test3',
                    percentage: 100
                },
                {
                    _id: 4,
                    code: 'test4',
                    label: 'test4 long label',
                    percentage: 85
                }
            ]
        },
        {
            _id: 4,
            code: 'iot',
            label: 'IoT',
            percentage: 85,
            sub_skills: [
                {
                    _id: 1,
                    code: 'test1',
                    label: 'test1',
                    percentage: 95
                },
                {
                    _id: 2,
                    code: 'test2',
                    label: 'test2',
                    percentage: 90
                }
            ]
        },
        {
            _id: 5,
            code: 'cloud',
            label: 'Cloud',
            percentage: 80,
            sub_skills: [
                {
                    _id: 1,
                    code: 'test1',
                    label: 'test1',
                    percentage: 95
                },
                {
                    _id: 2,
                    code: 'test2',
                    label: 'test2',
                    percentage: 90
                },
                {
                    _id: 3,
                    code: 'test3',
                    label: 'test3',
                    percentage: 85
                },
                {
                    _id: 4,
                    code: 'test4',
                    label: 'test4',
                    percentage: 85
                },
                {
                    _id: 5,
                    code: 'test5',
                    label: 'test5',
                    percentage: 85
                },
                {
                    _id: 6,
                    code: 'test4',
                    label: 'test4',
                    percentage: 85
                },
                {
                    _id: 7,
                    code: 'test5',
                    label: 'test5',
                    percentage: 85
                },
                {
                    _id: 8,
                    code: 'test4',
                    label: 'test4',
                    percentage: 85
                },
                {
                    _id: 9,
                    code: 'test5',
                    label: 'test5',
                    percentage: 85
                }
            ]
        },
        {
            _id: 6,
            code: 'db',
            label: 'DataBase',
            percentage: 70,
            sub_skills: []
        },
        {
            _id: 7,
            code: 'cv',
            label: 'Computer Vision',
            percentage: 65,
            sub_skills: []
        },
        {
            _id: 8,
            code: 'soft',
            label: 'Soft Skills',
            percentage: 90,
            sub_skills: []
        }
    ]
};

export const portfolio = {
    works: [
        {
            _id: 1,
            title: 'Work 1',
            description: 'Desc work 1',
            wallpapers: [
                {
                    _id: 1,
                    label: 'Image work 1',
                    path: './images/works/work1.png'
                }
            ]
        },
        {
            _id: 2,
            title: 'Work 2',
            description: 'Desc work 2',
            wallpapers: [
                {
                    _id: 1,
                    label: 'Image work 2',
                    path: './images/works/work2.gif'
                }
            ]
        },
        {
            _id: 3,
            title: 'Work 3',
            description: 'Desc work 3',
            wallpapers: [
                {
                    _id: 1,
                    label: 'Image work 3',
                    path: './images/works/work3.png'
                }
            ]
        }
    ]
};

export const experience = {
    experience: [
        {
            _id: 1,
            title: 'Alma Mater Studiorum',
            where: 'Bologna',
            task: 'It Engineering Student',
            description: '',
            from: '2017',
            to: null,
            current: true
        },
        {
            _id: 2,
            title: '3Tech Group S.r.l.',
            where: 'Ancona',
            task: 'Web Developer',
            description: 'Sviluppatore web addetto alla realizzazione di applicazioni web e mobile a livello di grafica e di backend (sistemi informativi, edp',
            from: '2016',
            to: '2017',
            current: false
        },
        {
            _id: 3,
            title: 'UNIVPM',
            where: 'Ancona',
            task: 'Degree in IT Engineering',
            description: '97/110',
            from: '2012',
            to: '2017',
            current: false
        },
        {
            _id: 4,
            title: 'Test',
            where: 'Anywhere',
            task: 'My task',
            description: 'Description task',
            from: '2010',
            to: '2012',
            current: false
        }
    ]
};
