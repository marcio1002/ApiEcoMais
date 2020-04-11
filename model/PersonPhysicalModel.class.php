<?php    
    namespace Model;
        
        use Interfaces\PersonPhysicalInterface;
        use Model\Person;
        use Exception;
        use TypeError;
        
        class PersonPhysical extends Person implements PersonPhysicalInterface{

            protected $cpf;
    
            public function getCpf():string 
            {
                return $this->cpf;
            }
        
            public function setCpf(int $cpf):void 
            { 
                if(empty($cpf)) throw new Exception('Undefined value');
                if (!is_numeric($cpf)) throw new TypeError("Expected a number format", 1);
                $this->cpf = trim($cpf);
            }
        }
