const updateData = {
    entity: 'User',
    entity_id: '12345',
    acted_by: 'admin@example.com',
    operation_name: 'update',
    changes: [
      {
        field: 'email',
        old_value: 'john.doe@oldmail.com',
        new_value: 'john.doe@newmail.com'
      },
      {
        field: 'job_title',
        old_value: 'Software Engineer',
        new_value: 'Senior Software Engineer'
      }
    ],
    reason: 'Annual review update',
    metadata: {
      ip_address: '192.168.1.100',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      application: 'HR Portal'
    },
    related_entities: [
      { entity: 'Department', entity_id: 'IT-001' },
      { entity: 'Project', entity_id: 'PROJ-123' }
    ]
  };