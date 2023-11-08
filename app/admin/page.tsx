export default function Admin() {

    async function onSubmit(formData: FormData) {
        "use server";


        const name = formData.get("name");
        const email = formData.get("email");

        console.log("Dados recebidos com sucesso", {

            name,
            email,

        });

    }


    return (
        <div>
            <form action={onSubmit} className="space-x-3 text-black">
                <input type="text" placeholder="Name" name="name" id="name" />
                <input type="text" placeholder="Email" name="email" id="email" />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );


}