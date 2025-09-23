smart contract
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract BlueCarbonRegistry {
    struct Project {
        string name;
        string description;
        string location;
        string ecosystem;
        uint256 expectedCarbonCapture;
        address owner;
        bool acknowledged; // false = pending, true = approved
    }

    address public admin;  
    uint256 public projectCount;
    mapping(uint256 => Project) public projects;

    event ProjectRegistered(uint256 projectId, address indexed owner);
    event ProjectAcknowledged(uint256 projectId, bool status);

    constructor() {
        admin = msg.sender; // deployer becomes admin
    }

    // Register a new project
    function registerProject(
        string memory _name,
        string memory _description,
        string memory _location,
        string memory _ecosystem,
        uint256 _expectedCarbonCapture
    ) public {
        projectCount++;
        projects[projectCount] = Project(
            _name,
            _description,
            _location,
            _ecosystem,
            _expectedCarbonCapture,
            msg.sender,
            false
        );
        emit ProjectRegistered(projectCount, msg.sender);
    }

    // Only Admin can acknowledge/approve a project
    function acknowledgeProject(uint256 _projectId, bool _status) public {
        require(msg.sender == admin, "Only admin can acknowledge");
        projects[_projectId].acknowledged = _status;
        emit ProjectAcknowledged(_projectId, _status);
    }

    // Fetch project details
    function getProject(uint256 _projectId)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            address,
            bool
        )
    {
        Project memory p = projects[_projectId];
        return (
            p.name,
            p.description,
            p.location,
            p.ecosystem,
            p.expectedCarbonCapture,
            p.owner,
            p.acknowledged
        );
    }
}