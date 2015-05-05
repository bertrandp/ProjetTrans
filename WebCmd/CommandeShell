package shell;
import java.io.BufferedReader;
import java.io.InputStreamReader;
 
public class CommandeShell {
 
	public static void main(String[] args) {
 
	
		String dep="RIGHT";
		NewThread threadcommand=new NewThread(dep);
		threadcommand.start();
	
		
		//String output2 = obj.executeCommand(command1);
		//System.out.println(output2);
		
		
	}
	
	
 
	String executeCommand(String command) {
 
		StringBuffer output = new StringBuffer();
 
		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader reader = 
                            new BufferedReader(new InputStreamReader(p.getInputStream()));
 
                        String line = "";			
			while ((line = reader.readLine())!= null) {
				output.append(line + "\n");
			}
 
		} catch (Exception e) {
			e.printStackTrace();
		}
 
		return output.toString();
 
	}
 
}
