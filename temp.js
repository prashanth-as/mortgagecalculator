function workcal(curr_age, curr_sal) {

	var table = "";
	var acount = curr_age;
	var beg_bal = 0;
	var inv_gr = 0;
	var con_inc = ((10 * curr_sal) / 100);
	var ret_inc = 84425;
	var ret_draw = 84425;
	var end_ret = 0;

	table += "<tr>";
	table += "<td>" + acount + "</td>";
	table += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
	table += "<td> $ " + Math.round(inv_gr.toFixed(2)) + "</td>";
	table += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
	table += "<td> $ " + 0 + "</td>";
	table += "<td> $ " + 0 + "</td>";
	table += "<td> $ " + Math.round((end_ret + con_inc).toFixed(2)) + "</td>";
	table += "</tr>";

	while (acount < (ret_age) 
    {
        beg_bal = beg_bal + inv_gr + con_inc;
		inv_gr = ((5 * beg_bal) / 100);
		con_inc = con_inc + ((2 * con_inc) / 100);
		end_ret = beg_bal + inv_gr + con_inc;

		table += "<tr>";
		table += "<td>" + (acount + 1) + "</td>";
		table += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
		table += "<td> $ " + Math.round(inv_gr.toFixed(2)) + "</td>";
		table += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + Math.round(end_ret.toFixed(2)) + "</td>";
		table += "</tr>";

		acount++;
	}

	var bb = Math.round(end_ret);
	var ig = Math.round(((5 * end_ret) / 100));
	var ri = Math.round(ret_inc);
	var rd = Math.round(ret_draw);
	var er = Math.round(end_ret + ((5 * end_ret) / 100) - ret_inc);

	table += "<tr>";
	table += "<td>" + (acount + 1) + "</td>";
	table += "<td> $ " + bb + "</td>";
	table += "<td> $ " + ig + "</td>";
	table += "<td> $ " + 0 + "</td>";
	table += "<td> $ " + ri + "</td>";
	table += "<td> $ " + rd + "</td>";
	table += "<td> $ " + er + "</td>";
	table += "</tr>";
	acount++;

	while (acount) {

		bb = er;
		ig = Math.round(((5 * bb) / 100));
		ri = ri + ((1.5 * ri) / 100);
		rd = ri;
		er = Math.round(bb + ig - ri);


		table += "<tr>";
		table += "<td>" + (acount + 1) + "</td>";
		table += "<td> $ " + bb + "</td>";
		table += "<td> $ " + ig + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + Math.round(ri) + "</td>";
		table += "<td> $ " + Math.round(rd) + "</td>";
		table += "<td> $ " + er + "</td>";
		table += "</tr>";

		acount++;
	}

	var bbal = Math.round(er);
	var igr = Math.round(((5 * er) / 100));
	var rin = Math.round(ri + ((1.5 * ri) / 100));
	var rdr = Math.round(rd);
	var eret = Math.round(bbal + igr);
	table += "<tr>";
	table += "<td>" + (acount + 1) + "</td>";
	table += "<td> $ " + bbal + "</td>";
	table += "<td> $ " + igr + "</td>";
	table += "<td> $ " + 0 + "</td>";
	table += "<td> $ " + rin + "</td>";
	table += "<td> $ " + eret + "</td>";
	table += "<td> $ " + 0 + "</td>";
	table += "</tr>";
	acount++;

	while (acount < (ret_age)+(yrs_ret)) {
        
        ri = ri + ((1.5 * ri) / 100);
		table += "<tr>";
		table += "<td>" + (acount + 1) + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + Math.round(ri + ((1.5 * ri) / 100)) + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "<td> $ " + 0 + "</td>";
		table += "</tr>";
        acount++;
	}