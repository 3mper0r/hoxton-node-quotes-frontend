import './FormAddQuote.css'

export function AddQuote() {
    return <>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Name" />
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name="lastname" placeholder="Last Name" />
            <label htmlFor="quote">Quote:</label>
            <textarea name="quote" id="" cols={20} rows={5}></textarea>
            <label htmlFor="year">Year:</label>
            <input type="number" name="year" placeholder="Year" />
            <label htmlFor="bc">BC</label>
            <input type="radio" name="bcac" />
            <label htmlFor="ac">AC</label>
            <input type="radio" name="bcac" />
            <input id="submit" type="submit" onSubmit={(e) => e.preventDefault} />
        </form>
    </>
}

