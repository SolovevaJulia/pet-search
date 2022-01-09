import './dev_ilya.css'



const DevIlya = () => {

    const [cardList, setCardList] = useState(
        [
            {title: 'Привет'},
            {title: 'Скроль вниз'},
            {title: 'Лоадер'}
        ]
    )
    const [loader, setLoader] = useState(false)

    const nextPage = () => {
        const newCardPage = [{title: 'Страница 2'},
            {title: 'Скроль вниз на третью стр'},
            {title: 'Лоадер 3'}]
        setLoader(true)
        setTimeout(() => {
            const payload = [...cardList, ...newCardPage]
            setCardList(payload)
            setLoader(false)
        }, 3000)

    }

    //ТЕСТ
    function onEntry(entry) {
        console.log('entry', entry)
        entry.forEach(change => {
            if (change.isIntersecting) {
                nextPage()
            }
        });
    }

    useEffect(() => {
        const visibleBtn = () => {
            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.btn-more');
            for (let elm of elements) {
                observer.observe(elm);
            }
        }
        visibleBtn()
        return () => {}
    })
    // ТЕСТ

    return(
        <section className='pt-5'>
            <div className='container'>
                <h1>Разработка</h1>
                {cardList.length > 0 ?
                    cardList.map((cardItem, index) => {
                        return <div className='card' key={index}>
                            <p>{cardItem.title}</p>
                        </div>
                    })
                    :
                    <p>Список пустой</p>
                }
                <div className='btn-more-wrapper'>
                    {loader ?  <div className="spinner-border loader" role="status">
                            <span className="sr-only"></span>
                        </div>
                        :  <button onClick={() => nextPage()} type="button" className="btn btn-more">Загрузить еще</button>
                    }
                </div>
            </div>
        </section>
    )
}
