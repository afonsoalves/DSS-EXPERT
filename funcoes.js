$(function($){
				$('#calcular').click(function(){
			 
					var nome = $('#distancia').val();
					var idade = $('#largura').val();
			 
					var res = (nome/idade)*4.8;
					$('#resultado').val(res);
					$("#resultado").attr('type','text');
					$("#resultado").attr('style','color:red');

				});
				$('#wd1').click(function(){
				 
						var camera = $('#cameras').val();
						var hora = $('#horas').val();
				 
						var res = (camera/hora);
						$('#resultadohd').val(res);
						$("#resultadohd").attr('type','text');
						$("#resultadohd").attr('style','color:red');
				});
				$('#hd').click(function(){
				 
						var camera = $('#cameras').val();
						var hora = $('#horas').val();
				 
						var res = (camera/hora);
						$('#resultadohd').val(res);
						$("#resultadohd").attr('type','text');
						$("#resultadohd").attr('style','color:red');
				});
				$('#full').click(function(){
				 
						var camera = $('#cameras').val();
						var hora = $('#horas').val();
				 
						var res = (camera/hora);
						$('#resultadohd').val(res);
						$("#resultadohd").attr('type','text');
						$("#resultadohd").attr('style','color:red');
				});
			});