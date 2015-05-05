package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

/**
 * Servlet implementation class MyServlet
 */


public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String content;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public MyServlet() {
		super();
		content = "";
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//set the format of the response to json format
		response.setContentType("application/json");
		//Create a Json object
		JSONObject jsonToSend;
		jsonToSend=new JSONObject();
		jsonToSend.put("cmd", "GetInfo");
		jsonToSend.put("data", new Date()+" ----> "+ content);
		
		//Send the json object to the web browser
		PrintWriter out = response.getWriter();
		out.write(jsonToSend.toString());
		out.flush();
		content = "";
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		//All data transmitted in json format are linked to parameter into the HttpServletRequest
		//get a json attribute cmd
		String cmd = request.getParameter("cmd");
		if (cmd != null) {
			if ("PostInfo".equals(cmd)) {
				//If cmd is available and equal to "PostInfo" then data is retrieve 
				String data = request.getParameter("data");
				if (data != null) {
					//Content is updated according to the received data
					content = content + " " + data;
				}
			}
			if ("Reset".equals(cmd)) {
				content = "";	
			}
		}
	}
	

}
