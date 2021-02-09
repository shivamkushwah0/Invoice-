module.exports = (data) => {
    const total_1 = data.quantity_1 * data.unit_1 ;
    const total_2 = data.quantity_2 * data.unit_2 ;
    const total_3 = data.quantity_3 * data.unit_3 ;
    const total_4 = data.quantity_4 * data.unit_4 ;
    const total_5 = data.quantity_5 * data.unit_5 ;
    const total = total_1 + total_2 + total_3 + total_4 + total_5 ;
    const today = new Date();
    var name = "" ; 
    console.log(data.gender);
    if(data.gender === "Male")
    name = `Mr. ${data.client_name}`;
    else if(data.gender === "Female") 
    name = `Ms. ${data.client_name}`;
    else 
    name = data.client_name;  
return `
<!DOCTYPE html>
<html>
<head>
	<title>HTML to Pdf Convert</title>
	<style>
		}

		#message_box{
			padding :25px 80px;
		}
	</style>
	<style type="text/css">
		.tg  {border-collapse:collapse;border-spacing:0;}
		.tg .tg-0lax{text-align:left;vertical-align:top}
	</style>
</head>
<body style="padding:20px; width: 700px ; margin:auto; " >
	<div>
    <table width="700">
    <tr>
    <td aligh="left">
		<div style="flex-grow:4">
			<h2>Raven Technolabs</h2>
			Office-802. Ratans Tower.<br>
			B/H Shreyash Trade Center<br>
			1Varachha Road. Surat-395006<br><br><br>
			+91 8469536960<br>
			raventechnolabs.com

		</div>
        </td>
        <td align="right">
		<div>
		<h1>INVOICE</h1>
		Date : ${`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`}<br>
		Invoice #1<br><br>
		<b>${data.client_name}</b><br><br>
		<b>${data.project_name}</b><br>
		</div>
        </td>
        </tr>
        </table>
	</div>
	<hr style="margin:25px;">
	<div id="message_box" style="padding :25px 80px;">
		Dear ${name}, <br><br>
		${data.message} <br><br>
		Many Thanks,<br>
		Raven Technolabs<br><br>
	</div>
	<table class="tg" cellpadding="5" width="750">
<thead>
  <tr style="background-color:#7FFFD4;">
    <th class="tg-0lax" width="25">#</th>
    <th class="tg-0lax" width="450">Item Description</th>
    <th class="tg-0lax">Quantity</th>
    <th class="tg-0lax">Unit Price</th>
    <th class="tg-0lax">Total Price</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">1</td>
    <td class="tg-0lax">${data.item_1}</td>
    <td class="tg-0lax">${data.quantity_1}</td>
    <td class="tg-0lax">${data.unit_1}</td>
    <td class="tg-0lax">${total_1}</td>
  </tr>
  <tr style="background-color:#E0FFFF;">
    <td class="tg-0lax">2</td>
    <td class="tg-0lax">${data.item_2}</td>
    <td class="tg-0lax">${data.quantity_2}</td>
    <td class="tg-0lax">${data.unit_2}</td>
    <td class="tg-0lax">${total_2}</td>
  </tr>
  <tr>
    <td class="tg-0lax">3</td>
    <td class="tg-0lax">${data.item_3}</td>
    <td class="tg-0lax">${data.quantity_3}</td>
    <td class="tg-0lax">${data.unit_3}</td>
    <td class="tg-0lax">${total_3}</td>
  </tr>
  <tr style="background-color:#E0FFFF;">
    <td class="tg-0lax">4</td>
    <td class="tg-0lax">${data.item_4}</td>
    <td class="tg-0lax">${data.quantity_4}</td>
    <td class="tg-0lax">${data.unit_4}</td>
    <td class="tg-0lax">${total_4}</td>
  </tr>
  <tr>
    <td class="tg-0lax">5</td>
    <td class="tg-0lax">${data.item_5}</td>
    <td class="tg-0lax">${data.quantity_5}</td>
    <td class="tg-0lax">${data.unit_5}</td>
    <td class="tg-0lax">${total_5}</td>
  </tr>
  <tr style="background-color:#E0FFFF;">
    <th class="tg-0lax" colspan="4">Subtotal</th>
    <td class="tg-0lax">${total}</td>
  </tr>
  <tr>
    <th class="tg-0lax" colspan="4">Extras</th>
    <td class="tg-0lax">0</td>
  </tr>
  <tr style="background-color:#E0FFFF;">
    <th class="tg-0lax" colspan="4">Total</th>
    <td class="tg-0lax">${total}</td>
  </tr>
  
</tbody>
</table>
<div id="message_box" style="padding :25px 80px;">
	Many thanks for your custom.
	I look forward to doing business with you again in due course.<br><br>
	Payment terms: to be received within 60 days.
</div>
</body>
</html>
`
}