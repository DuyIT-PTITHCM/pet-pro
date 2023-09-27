<script>
    let date = new Date().toLocaleDateString();
    import autoTable from "jspdf-autotable";
    import jsPDF from "jspdf";
    let customerName = "John Doe";

    let items = [
        { id: 1, name: "Item 1", quantity: 2, price: 10.99 },
        { id: 2, name: "Item 2", quantity: 1, price: 5.99 },
        { id: 3, name: "Item 3", quantity: 3, price: 7.49 },
    ];

    function generatePDF() {
        const doc = new jsPDF();
        autoTable(doc, { html: "#my-table" });

        autoTable(doc, {
            head: [["Name", "Email", "Country"]],
            body: [
                ["David", "david@example.com", "Sweden"],
                ["Castille", "castille@example.com", "Spain"],
            ],
        });

        doc.autoPrint();
        doc.output("dataurlnewwindow");
    }
</script>

<div>
    <h1>Bill</h1>
    <p>Date: {date}</p>
    <p>Customer: {customerName}</p>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {#each items as item (item.id)}
                <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button on:click={generatePDF}>Generate PDF</button>
</div>

<style>
    /* Add your CSS styles here for the bill template */
    h1 {
        text-align: center;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    table,
    th,
    td {
        border: 1px solid #ccc;
    }
    th,
    td {
        padding: 8px;
        text-align: left;
    }
</style>
